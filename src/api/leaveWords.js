import request from './request'

export async function postLeaveWords(leaveWordsInfo) {
  return await request.post('/api/message', leaveWordsInfo)
}

export async function getLeaveWords(page = 1, limit = 10) {
  return await request.get('/api/message', {
    params: {
      page,
      limit,
    },
  })
}
