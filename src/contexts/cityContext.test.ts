import { act, renderHook, waitFor } from '@testing-library/react-native'

import { useCity } from '@hooks/useCity'
import { CityProvider } from '@contexts/CityContext'

describe('Context: cityContext', () => {
  it('should be change selected city', async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })

    await waitFor(() => act(() => result.current.handleChanceCity({
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456
    })))

    expect(result.current.city?.name).toBe('São Paulo')
  })
})