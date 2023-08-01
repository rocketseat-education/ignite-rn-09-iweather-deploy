import { getStorageCity, removeStorageCity, saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { CityProps } from "@services/getCityByNameService"

const newCity: CityProps = {
  id: '1',
  name:'São Paulo',
  latitude: 123,
  longitude: 456
}

describe('Storage: CityStorage', () => {
  it("should be return null when don't have a city storaged", async () => {
    const response = await getStorageCity()

    expect(response).toBeNull()
  })

  it('shoul be return city storaged', async () => {
    
    await saveStorageCity(newCity)

    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  })

  it('should be remove city storage', async () => {    
    await saveStorageCity(newCity)
    await removeStorageCity()

    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})