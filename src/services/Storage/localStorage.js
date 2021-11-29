import Storage from "./storageModel";

class LocalStorage {
  static saveName = async (name) => {
    try {
      let currentNames = [];
      const names = await this.getNames();
      if (names) {
        currentNames = [...names, name];
      } else {
        currentNames.push(name);
      }
      await Storage.setJSON("babyNames");
    } catch (e) {
      console.info("e setAppleInfo", e);
    }
  };
  static getNames = async () => {
    let result = null;
    try {
      result = await Storage.getJSON("babyNames");
    } catch (e) {
      console.info("e getAppleInf", e);
    }
    return result;
  };
}

export default LocalStorage;
