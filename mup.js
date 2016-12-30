module.exports = {
  servers: {
    one: {
      host: '174.51.90.106',
      username: 'ubuntu',
      pem: '/home/users/anthonyproctor/soccer-app/SoccerScout.pem'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'SoccerScout',
    path: '/soccer-app',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'ec2-54-214-81-224.us-west-2.compute.amazonaws.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 999
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
