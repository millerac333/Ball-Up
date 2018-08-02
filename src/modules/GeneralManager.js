import settings from "../settings";

export default Object.create(null, {
  getSingleDataBlock: {
    value: function(resource, id) {
      return fetch(`${settings.remoteURL}/${resource}/${id}`).then(e =>
        e.json()
      );
    }
  },
  getAllData: {
    value: resource => {
      return fetch(`${settings.remoteURL}/${resource}`).then(e => e.json());
    }
  },
  deleteData: {
    value: (resource, id) => {
      return fetch(`${settings.remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      });
    }
  },
  patchData: {
    value: function(resource, resourceObject) {
      return fetch(`${settings.remoteURL}/${resource}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(resourceObject)
      }).then(e => e.json());
    }
  },
  postData: {
    value: function(resource, resourceObject) {
      return fetch(`${settings.remoteURL}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(resourceObject)
      }).then(e => e.json());
    }
  }
});
