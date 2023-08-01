import { render, screen } from "@testing-library/react-native"
import { NextDays } from "@components/NextDays"

import clearDay from '@assets/clear_day.svg'

describe('Component: NextDays', () => {
  it('should be render day', () => {
    render(
      <NextDays 
        data={[
          { day: '18/07', min: '30°c', max: '34°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '19/07', min: '35°c', max: '39°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '20/07', min: '39°c', max: '37°c', icon: clearDay, weather: 'Céu limpo' },
          { day: '21/07', min: '21°c', max: '30°c', icon: clearDay, weather: 'Chuva fraca' },
          { day: '22/07', min: '15°c', max: '20°c', icon: clearDay, weather: 'Nublado' },
        ]}
      />
    )

    expect(screen.getByText('19/07')).toBeTruthy()
  })
})