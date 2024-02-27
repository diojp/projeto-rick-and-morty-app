import api from '../instance';

export interface CharacterResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  location: string;
}

export const getCharacters = async (): Promise<CharacterResponse[]> => {
  const { data } = await api.get('/charecter');
  return data;
};

export const getCharacter = async (id: string): Promise<CharacterResponse> => {
  const { data } = await api.get(`/character/${id}`);
  return data;
};
