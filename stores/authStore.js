import { makeAutoObservable } from "mobx";
import instance from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import teamStore from "./teamStore"
import userStore from "./userStore"
//decode
import decode from "jwt-decode";

class AuthStore {
  user = null;
  team = [];

  constructor() {
    makeAutoObservable(this);
  }
  //set user
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  //sign up
  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  //sign in
  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      this.user = decode(res.data.token);
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  //sign out
  signout = () => {
    this.user = null;
    delete instance.defaults.headers.common.Authorization;
    AsyncStorage.removeItem("myToken");
    alert("Signed Out");
  };

  // Update User
  updateUser = async (userData) => {
    try {
      await instance.put(`/${userData.id}`, userData);
     // this.setUser(res.data.token);
      //this.user = decode(res.data.token);
      teamStore.fetchTeam();
      userStore.fetchUser();
    } catch (error) {
      console.log("userStore -> updateUser -> error", error);
    }
  };

  // Create Team
  createTeam = async (newTeam) => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      const res = await instance.post("/teams", newTeam, {
        headers: { Authorization: `Bearer ${token}` },
      });
      //this.team.push(res.data);
      teamStore.fetchTeam();
      userStore.fetchUser();
    } catch (error) {
      console.log("authStore -> createTeam -> error ", error);
    }
  };

  // Delete Team
  deleteTeam = async (teamId) => {
    try {
      await instance.delete(`/teams/${teamId}`);
      this.teams = this.teams.filter((team) => team.id !== +teamId);
    } catch (error) {
      console.log("authStore -> deleteTeam -> error", error);
    }
  };

  // check if token exists

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < decodedToken.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;