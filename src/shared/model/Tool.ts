import React from 'react'

export interface Tool {
    id: string
    title: string
    side: 'right' | 'left'
    Panel: React.ComponentType
    icon: React.ReactNode
}
