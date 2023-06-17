export interface RegisterProxy {
    channel: {
        id: number,
        name: string,
        latitude: number,
        longitude: number,
        field1: string,
        created_at: Date,
        updated_at: Date,
        last_entry_id: number
    },
    feeds: [
        {
            created_at: Date,
            entry_id: number,
            field1: number
        },
    ]
}
