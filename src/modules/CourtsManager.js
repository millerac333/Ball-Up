import GeneralManager from "./GeneralManager";

export default Object.create(GeneralManager, {
  get: {
    value: function(id) {
      return this.getSingle("courts", id);
    }
  },
  all: {
    value: function() {
      return this.getAll("courts");
    }
  },
  add: {
    value: function(resource) {
      return this.post("courts", resource);
    }
  }
});
