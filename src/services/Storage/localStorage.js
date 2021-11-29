import Storage from "./storageModel";

class LocalStorage {
  static addName = async (name) => {
    try {
      let currentNames = [];
      const names = await this.getNames();
      if (names) {
        currentNames = [...names, name];
      } else {
        currentNames.push(name);
      }
      await Storage.setJSON("babyNames", currentNames);
      return currentNames;
    } catch (e) {
      console.info("e saveName", e);
    }
  };
  static getNames = async () => {
    let result = null;
    try {
      result = await Storage.getJSON("babyNames");
    } catch (e) {
      console.info("e getNames", e);
    }
    return result;
  };
}

export default LocalStorage;
