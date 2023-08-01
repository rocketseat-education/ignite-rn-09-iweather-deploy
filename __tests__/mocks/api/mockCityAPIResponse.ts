import { CityAPIResponse } from '@services/getCityByNameService'

export const mockCityAPIResponse: CityAPIResponse = {
  id: '1',
  name: 'São Paulo',
  sys: {
    country: 'BR'
  },
  coord: {
    lat: 123,
    lon: 456
  }
}