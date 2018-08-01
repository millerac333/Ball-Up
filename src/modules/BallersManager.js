import GeneralManager from "./GeneralManager";

export default Object.create(GeneralManager, {
  get: {
    value: function(id) {
      return this.getSingle("ballers", id);
    }
  },
  all: {
    value: function() {
      return this.getAll("ballers");
    }
  },
  add: {
    value: function(resource) {
      return this.post("ballers", resource);
    }
  },
  removeAndList: {
    value: function(id) {
      return this.delete("ballers", id).then(() => this.all());
    }
  }
});
