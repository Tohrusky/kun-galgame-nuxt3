import type { KunLanguage } from '../i18n'

export interface GalgameUser {
  uid: number
  name: string
  avatar: string
}

export interface GalgameContributor {
  uid: number
  avatar: string
}

export interface GalgameDetail {
  gid: number
  vndbId: string
  user: GalgameUser
  name: KunLanguage
  banner: string
  introduction: KunLanguage
  time: number
  views: number
  platform: string[]
  contributor: GalgameContributor[]
  likes: number
  favorites: number
  alias: string[]
  official: string
}

export interface GalgamePageRequestData {
  page: string
  limit: string
  sortOrder: SortOrder
}

export interface GalgameCard {
  gid: number
  name: KunLanguage
  banner: string
  user: GalgameUser

  views: number
  likes: number
  time: number
  platform: string[]
}
