export type apiType = {
    fetchError: boolean,
    isFetching: boolean,
    cacheUntil?: number,
    optimistic?: boolean,
}

export type dictState<entry> = {
    [id: string]: entry
}

export type DictAPIState<entry> = dictState<entry & apiType>
