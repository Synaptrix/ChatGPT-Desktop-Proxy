import { NextRequest, NextResponse } from 'next/server'

const OPENAI_API = 'https://api.openai.com'
export const config = {
  matcher: ['/api/(.*)'],
}

export default async function apiHandler(req: NextRequest) {
  // 自定义header中包含需要转向的host地址
  let hostUrl = req.headers.get('hostUrl')

  // 对应的真实路由
  const pathname = req.nextUrl.pathname.replace('/api', '')

  // !!!注意：只有流式响应的headers不能携带，需要手动写入
  if (!hostUrl && pathname === '/v1/chat/completions') {
    hostUrl = OPENAI_API
  }

  if (!hostUrl || !pathname) {
    req.nextUrl.pathname = `/404`
  } else {
    return NextResponse.rewrite(hostUrl + pathname)
  }

}
