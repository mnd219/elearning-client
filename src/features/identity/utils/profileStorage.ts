const storageKey = (contactId: string) =>
  `activeProfile:${contactId}`;

export function saveProfileId(
  contactId: string,
  profileId: string
) {
  localStorage.setItem(
    storageKey(contactId),
    profileId
  );
}

export function getSavedProfileId(
  contactId: string
): string | null {
  return localStorage.getItem(
    storageKey(contactId)
  );
}

export function removeSavedProfileId(
  contactId: string
) {
  localStorage.removeItem(
    storageKey(contactId)
  );
}