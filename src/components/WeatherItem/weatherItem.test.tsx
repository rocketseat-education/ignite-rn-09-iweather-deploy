import { render, screen } from "@testing-library/react-native"
import { WeatherItem } from "@components/WeatherItem"

import dropIcon from '@assets/drop.svg'

describe("Component: WeatherItem", () => {
  it('should be render show title and value', () => {
    render(
      <WeatherItem 
        icon={dropIcon}
        title="Umidade do ar"
        value="81%"
      />
    )

    const title = screen.getByText('Umidade do ar')
    const value = screen.getByText('81%')

    expect(title).toBeTruthy()
    expect(value).toBeTruthy()
  })
})