import { makeAutoObservable } from "mobx";
import instance from "./instance";

class FieldAPIStore {

  constructor() {
    makeAutoObservable(this);
  }
  fields = [];

  fetchField = async () => {
    const response = await instance.get("/fields");
    this.fields = response.data;
  };
}

const fieldAPIStore = new FieldAPIStore();
fieldAPIStore.fetchField();

export default fieldAPIStore;