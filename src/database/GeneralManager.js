import settings from "../settings";

const GeneralManager = Object.create(
  {},
  {
    getAll: {
      value: resource => {
        return fetch(`${settings.remoteURL}/${resource}`).then(e => e.json());
      }
    },
    getSingle: {
      value: function(resource, id) {
        return fetch(`${settings.remoteURL}/${resource}/${id}`).then(e =>
          e.json()
        );
      }
    },
    deleteItem: {
      value: (resource, id) => {
        return fetch(`${settings.remoteURL}/${resource}/${id}`, {
          method: "DELETE"
        });
      }
    },
    patchItem: {
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
    postItem: {
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
  }
);
