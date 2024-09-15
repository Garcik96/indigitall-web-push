/* eslint-disable no-undef */
export const loginIndigitall = loginId => {
  return new Promise((resolve, reject) => {
    indigitall.logIn(
      loginId,
      device => {
        resolve(device);
      },
      error => {
        reject(error);
      },
    );
  });
};

export const logoutIndigitall = () => {
  return new Promise((resolve, reject) => {
    indigitall.logOut(
      device => {
        resolve(device);
      },
      error => {
        reject(error);
      },
    );
  });
};

export const sendCustomEvent = eventType => {
  return new Promise((resolve, reject) => {
    indigitall.sendCustomEvent(
      {
        eventType,
        customData: {},
        async: false,
      },
      response => {
        resolve(response);
      },
      error => {
        reject(error);
      },
    );
  });
};

export const topicsSubscribe = codes => {
  return new Promise((resolve, reject) => {
    indigitall.topicsSubscribe(
      codes,
      device => {
        resolve(device);
      },
      error => {
        reject(error);
      },
    );
  });
};

export const topicsUnsubscribe = codes => {
  return new Promise((resolve, reject) => {
    indigitall.topicsUnsubscribe(
      codes,
      device => {
        resolve(device);
      },
      error => {
        reject(error);
      },
    );
  });
};

export const handleUnsubscribeTopicAndSendCustomEvent = async (topic, eventType) => {
  return topicsUnsubscribe([topic])
    .then(() => sendCustomEvent(eventType))
    .catch(error => {
      console.error(`Error -> ${eventType}:`, error);
    });
};
