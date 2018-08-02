import GeneralManager from "./GeneralManager";

export default Object.create(GeneralManager, {
  get: {
    value: function(id) {
      return this.getSingleDataBlock("courts", id);
    }
  },
  all: {
    value: function() {
      return this.getAllData("courts");
    }
  },
  add: {
    value: function(resource) {
      return this.postData("courts", resource);
    }
  }
});
