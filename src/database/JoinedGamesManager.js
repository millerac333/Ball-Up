import settings from "../settings";
import GenrealManager from "./GeneralManager";

export default Object.create(GeneralManager, {
  get: {
    value: function(id) {
      return this.getSingle("joinedGames", id);
    }
  },
  all: {
    value: function() {
      return this.getAll("joinedGames");
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
      return this.post("joinedGames", resource);
    }
  },
  addAndList: {
    value: function(resource) {
      return this.post("joinedGames", resource).then(() => this.all());
    }
  },
  removeAndList: {
    value: function(id) {
      return this.delete("joinedGames", id).then(() => this.all());
    }
  }
});
