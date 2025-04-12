interface Model {
	uuid: string
}

export interface Tier extends Model {
	name: string
	description?: string
}

export interface TierListItem extends Model {
	name: string
}
