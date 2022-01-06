interface HasId {
    id: number
}

const nextId = (collection: HasId[]): number => (
    Math.max(0, ...collection.map((el) => el.id)) + 1
)

export { nextId }
export type { HasId }
