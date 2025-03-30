请求参数
接口名称	是否必填	接口类型	接口说明
id	是	string	88888888
key	是	string	88888888
sheng	是	string	广东
place	是	string	湛江经济技术开发区

返回参数
接口名称	接口类型	接口说明
code	string	200成功，400错误
msg	string	如果状态码返回400则msg返回错误信息提示。
precipitation	string	降水量。
temperature	string	温度。
humidity	string	湿度。
windDirection	string	风向。
windDirectionDegree	string	风向度。
windSpeed	string	风速。
windScale	string	风速描述。
place	string	查询到的地区。
weather1 string 天气1。
weather1 string 天气2。

ps:如果weather1与weather2相同，则显示第一种

显示天气内容：
xx风（风向） x级（风速描述） 天气x
或
xx风（风向） x级（风速描述） 天气x转x

示例显示内容：
西北风 3级 天气 阴
或
西北风 3级 天气 阴转多云