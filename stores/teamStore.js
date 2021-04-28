import { makeAutoObservable } from "mobx";
import instance from "./instance";

class TeamAPIStore {

  constructor() {
    makeAutoObservable(this);
  }
  teams = [];

  fetchTeam = async () => {
    const response = await instance.get("/teams");
    this.teams = response.data;
  };
}

const teamAPIStore = new TeamAPIStore();
teamAPIStore.fetchTeam();

export default teamAPIStore;