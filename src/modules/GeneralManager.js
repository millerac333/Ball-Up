import settings from "../settings";

export default Object.create(null, {
  getSingle: {
    value: function(resource, id) {
      return fetch(`${settings.remoteURL}/${resource}/${id}`).then(e =>
        e.json()
      );
    }
  },
  getAll: {
    value: resource => {
      return fetch(`${settings.remoteURL}/${resource}`).then(e => e.json());
    }
  },
  delete: {
    value: (resource, id) => {
      return fetch(`${settings.remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      });
    }
  },
  patch: {
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
  post: {
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
