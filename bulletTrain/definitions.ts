export default {
    types: {
        TravelCabinIndex: 'u32',
        TravelCabinInventoryIndex: 'u16',
        DpoMemberIndex: 'u8',
        DpoIndex: 'u32',
        TravelCabinInfo: {
            creator: 'AccountId',
            token_id: 'CurrencyId',
            index: 'TravelCabinIndex',
            deposit_amount: 'Balance',
            bonus_total: 'Balance',
            yield_total: 'Balance',
            maturity: 'u32',
            vault: 'Balance'
        },
        TravelCabinBuyerInfo: {
            buyer: 'Buyer',
            purchase_blk: 'BlockNumber',
            yield_withdrawn: 'Balance',
            fare_withdrawn: 'bool',
            blk_of_last_withdraw: 'BlockNumber'
        },
        MilestoneRewardInfo: {
            token_id: 'CurrencyId',
            deposited: 'Balance',
            milestones: 'Vec<(Balance, Balance)>',
            vault: 'Balance'
        },
        DpoState: {
            _enum: [
                'CREATED',
                'ACTIVE',
                'FAILED',
                'COMPLETED'
            ]
        },
        Target: {
            _enum: {
                Dpo: '(DpoIndex, u8)',
                TravelCabin: 'TravelCabinIndex'
            }
        },
        Buyer: {
            _enum: {
                Dpo: '(AccountId, DpoIndex)',
                Passenger: 'AccountId',
                InvalidBuyer: null
            }
        },
        DpoInfo: {
            index: 'DpoIndex',
            name: 'Text',
            token_id: 'CurrencyId',
            target: 'Target',
            target_amount: 'Balance',
            target_yield_estimate: 'Balance',
            target_bonus_estimate: 'Balance',
            amount_per_seat: 'Balance',
            commission_rate: 'u32',
            commission_rate_slashed: 'bool',
            empty_seats: 'u8',
            user_members: 'Vec<(AccountId, DpoMemberIndex)>',
            vault_deposit: 'Balance',
            vault_withdraw: 'Balance',
            vault_yield: 'Balance',
            vault_bonus: 'Balance',
            total_yield_received: 'Balance',
            total_bonus_received: 'Balance',
            total_milestone_received: 'Balance',
            blk_of_last_yield: 'Option<BlockNumber>',
            blk_of_dpo_filled: 'Option<BlockNumber>',
            expiry_blk: 'BlockNumber',
            state: 'DpoState',
            referrer: 'Option<AccountId>',
            fare_withdrawn: 'bool'
        },
        DpoMemberInfo: {
            buyer: 'Buyer',
            number_of_seats: 'u8',
            referrer: 'Referrer'
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
                'Bonus',
                'Yield',
                'ExcessAmountFromPurchase',
                'Withdraw'
            ]
        }
    }
}
