import React from "react";

import { Group, Text } from "@mantine/core";

const DEFAULT_DIMENSION_PX = 70
const DEFAULT_DIMENSION_PY = 100

interface ILogoProps extends React.ComponentPropsWithoutRef<'svg'> {
  color?: string
  strokeWidth?: number
  variant?: 'icon' | 'iconWithName'
}

export function Logo({
  color = '#3e64ff',
  strokeWidth = 1,
  variant = 'icon',
}: ILogoProps) {
  function getLogo(variant: 'icon' | 'iconWithName') {
    const SVG_ICON = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        width={DEFAULT_DIMENSION_PX}
        height={DEFAULT_DIMENSION_PY}
        viewBox="0 0 725 615"
        strokeWidth={strokeWidth}
      >
        <path
          id="Logo"
          d="M378.265,615h-.007a60.761,60.761,0,0,1-11.606-1.127,62.125,62.125,0,0,1-30.646-15.712,59.186,59.186,0,0,1-13.641-19.246,61.128,61.128,0,0,1-5.133-24.859V353.491H60.807a62.45,62.45,0,0,1-20.008-3.2,58.023,58.023,0,0,1-16.522-8.744,59.918,59.918,0,0,1-12.592-13A63.2,63.2,0,0,1,.065,294.916,60.125,60.125,0,0,1,1.95,276.86a58.26,58.26,0,0,1,7.619-17.139,62.656,62.656,0,0,1,13.8-14.925L334.992,0,699,254.176a61.367,61.367,0,0,1,10.748,9.545,60.122,60.122,0,0,1,7.92,11.307,60.757,60.757,0,0,1,5.063,12.535,61.569,61.569,0,0,1,1.438,26.619,60.786,60.786,0,0,1-3.684,13.013,60.168,60.168,0,0,1-6.659,12.1,61.414,61.414,0,0,1-9.662,10.654L417.774,599.927a61.34,61.34,0,0,1-19.107,11.437A58.707,58.707,0,0,1,378.265,615ZM354.041,58.265h0V554.056a24.045,24.045,0,0,0,2.02,9.78,23.29,23.29,0,0,0,5.367,7.572,24.285,24.285,0,0,0,7.677,4.891,24.017,24.017,0,0,0,8.948,1.736A23.372,23.372,0,0,0,393.6,572.1L679.991,322.13a23.963,23.963,0,0,0-2.032-37.682L354.041,58.265Zm-36.81,2.562-271.154,213a23.327,23.327,0,0,0-9.169,19.719,24.867,24.867,0,0,0,4.571,13.233A23.24,23.24,0,0,0,60.807,316.6H317.231Z"
        />
      </svg>
    )

    const ICON_WITH_NAME = (
      <Group>
        {SVG_ICON}
        <Text color={color}>Higor Alves</Text>
      </Group>
    )

    const list = {
      icon: SVG_ICON,
      iconWithName: ICON_WITH_NAME,
    }

    return list[variant] || list.icon
  }

  return getLogo(variant)
}
