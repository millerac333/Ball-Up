import GeneralManager from "./GeneralManager";

export default Object.create(GeneralManager, {
  get: {
    value: function(id) {
      return this.getSingleDataBlock("ballers", id);
    }
  },
  all: {
    value: function() {
      return this.getAllData("ballers");
    }
  },
  add: {
    value: function(resource) {
      return this.postData("ballers", resource);
    }
  },
  removeAndList: {
    value: function(id) {
      return this.deleteData("ballers", id).then(() => this.all());
    }
  },
  addAndList: {
    value: function(resource) {
      return this.postData("ballers", resource).then(() => this.all());
    }
  }
});
