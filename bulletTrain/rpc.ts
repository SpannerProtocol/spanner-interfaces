export default {
  rpc: {
    bulletTrain: {
      getTravelCabinsOfAccount: {
        description: 'Get travel cabins of account',
        params: [
          {
            name: 'account',
            type: 'AccountId',
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'Vec<(LockDropIndex, LockDropInventoryIndex)>',
      },
<<<<<<< HEAD
      getDposOfAccount: {
        description: 'Get dpos of account',
        params: [
          {
            name: 'account',
            type: 'AccountId',
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'Vec<(DpoIndex, DpoMemberIndex)>',
      },
    },
  },
}
=======
    },
  },
};
>>>>>>> 37895a44f8b0b2efdf3200e67a039011e16f1dfe
