/** IDs do ni-poneiconta que podem corresponder a Users.IdPonyAccount ou Users.Id no ni-player-api */
export function getPoneiUserLookupIds(user: {
  Id: string;
  ProfileId?: string | null;
  Profiles?: { Id: string } | null;
}): string[] {
  const ids = [user.ProfileId, user.Id, user.Profiles?.Id].filter(
    (id): id is string => Boolean(id),
  );
  return [...new Set(ids.map(normalizeUuid))];
}

export function normalizeUuid(id: unknown): string {
  return String(id).trim().toLowerCase();
}
