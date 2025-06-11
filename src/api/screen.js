import request from '@/utils/request'
import { API_PREFIX } from './config'

// 获取设备数量统计
export function getDeviceCount() {
  return request({
    url: `${API_PREFIX.SCREEN}/device/count`,
    method: 'get'
  })
}

// 获取租户设备数量统计
export function getTenantDeviceCount() {
  return request({
    url: `${API_PREFIX.SCREEN}/tenant/device/count`,
    method: 'get'
  })
}