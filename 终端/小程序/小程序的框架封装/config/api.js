const baseUrl = '';

module.exports = {
  /** 登录 */
  LOGIN_WECHAT_LOGIN: `${baseUrl}/user/login`,
  LOGIN_WECHAT_GET_USERINFO: `${baseUrl}/user/getUserInfo`,
  LOGIN_WECHAT_GET_PHONENUM: `${baseUrl}/user/getPhoneNumber`,
  LOGIN_APP_REGISTER_LOGIN: `${baseUrl}/user/register`,
  LOGIN_TOKEN_REFRESH: `${baseUrl}/user/refresh`,
  LOGIN_OPENID_REFRESH: `${baseUrl}/user/refreshOpenId`,
}