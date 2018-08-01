import settings from "../settings";
import GeneralManager from "./GeneralManager";

export default Object.create(GamesManager, {
  get: {
    value: function(id) {
      return this.getSingle("games", id);
    }
  },
  all: {
    value: function() {
      return this.getAll("games");
    }
  },
  // getWithCaretaker: {
  //     value: function (id) {
  //         return fetch(`${settings.remoteURL}/animals/${id}/?_expand=employee`).then(e => e.json())
  //     }
  // },
  // listWithCaretaker: {
  //     value: function (id) {
  //         return fetch(`${settings.remoteURL}/animals?_expand=employee`).then(e => e.json())
  //     }
  // },
  add: {
    value: function(resource) {
      return this.post("games", resource);
    }
  },
  addAndList: {
    value: function(resource) {
      return this.post("games", resource).then(() => this.all());
    }
  },
  removeAndList: {
    value: function(id) {
      return this.delete("games", id).then(() => this.all());
    }
  }
});
