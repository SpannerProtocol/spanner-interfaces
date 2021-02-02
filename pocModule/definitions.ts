export default {
    types: {
        LockDropIndex: 'u32',
        LockDropInventoryIndex: 'u16',
        DpoMemberIndex: 'u8',
        DpoIndex: 'u32',
        LockDropInfo: {
            creator: 'AccountId',
            token_id: 'CurrencyId',
            index: 'LockDropIndex',
            lock: 'Balance',
            instant_drop_total: 'Balance',
            periodic_drop_total: 'Balance',
            maturity: 'u32',
            vault: 'Balance'
        },
        LockDropCommitInfo: {
            committer: 'Committer',
            commit_blk: 'BlockNumber',
            periodic_drop_withdrawn: 'Balance',
            lock_withdrawn: 'bool'
        },
        GlobalDropInfo: {
            token_id: 'CurrencyId',
            locked: 'Balance',
            milestones: 'Vec<(Balance, Balance)>',
            vault: 'Balance'
        },
        DpoState: {
            _enum: [
                'CREATED',
                'FILLED',
                'COMMITTED',
                'COMPLETED',
                'TERMINATED'
            ]
        },
        Target: {
            _enum: {
                Dpo: '(DpoIndex, u8)',
                LockDrop: 'LockDropIndex'
            }
        },
        Committer: {
            _enum: {
                Dpo: '(AccountId, DpoIndex)',
                Individual: 'AccountId',
                InvalidCommitter: null
            }
        },
        DpoInfo: {
            index: 'DpoIndex',
            name: 'Text',
            token_id: 'CurrencyId',
            target: 'Target',
            target_periodic_drop_perc_tolerance: 'u8',
            target_amount: 'Balance',
            target_drop_estimate: 'Balance',
            target_bonus_estimate: 'Balance',
            amount_per_slot: 'Balance',
            commission_rate: 'u8',
            commission_rate_slashed: 'bool',
            empty_slots: 'u8',
            members_excl_manager: 'Vec<(AccountId, DpoMemberIndex)>',
            vault_lock: 'Balance',
            vault_drop: 'Balance',
            vault_bonus: 'Balance',
            total_drop_received: 'Balance',
            total_bonus_received: 'Balance',
            total_global_received: 'Balance',
            blk_drop_last_release: 'BlockNumber',
            blk_dpo_filled: 'Option<BlockNumber>',
            expiry_blk: 'BlockNumber',
            state: 'DpoState'
        },
        DpoMemberInfo: {
            committer: 'Committer',
            number_of_slots: 'u8',
            referrer: 'Referrer',
            lock_withdrawn: 'bool'
        },
        Referrer: {
            _enum: {
                None: null,
                MemberOfDpo: 'DpoMemberIndex',
                External: '(AccountId, DpoMemberIndex)'
            }
        },
        PaymentType: {
            _enum: [
                'InstantDrop',
                'PeriodicDrop',
                'ExcessAmount'
            ]
        }
    }
}
