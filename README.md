# translate-cli

Machine learning translate any language.

[![Node.js Package](https://github.com/renkunx/translate-cli/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/renkunx/translate-cli/actions/workflows/npm-publish.yml)
## Usage

```js
translate --help
Options:
  -v,--version           output the current version
  -p, --platform [name]  designated translation platform (choices: "baidu", "google", default: "baidu")
  -t, --type [type]      designated translation content (choices: "string", "file", default: "string")
  -h, --help             display help for command
```

## Examples

### File translation

```shell
// Use Baidu translation for document translation
translate -t file from.js to.js -p baidu
```

### Text translation

```shell
// Use Baidu translation for text translation

translate '将要翻译成英文'
> To be translated into English

translate '将要翻译成日语' jp
> 日本語に訳します。
```

## TODO

- [x] Baidu translation

- [ ] Google translation

- [ ] deepl translation

## Language

|                           中文首字母 | 名称        | 代码  | 语种检测 | 名称        | 代码  | 语种检测 | 名称          | 代码  | 语种检测 |
|---------------------------------|-----------|-----|------|-----------|-----|------|-------------|-----|------|
| A                               | 阿拉伯语      | ara | 是    | 爱尔兰语      | gle | 是    | 奥克语         | oci | 是    |
|                                 | 阿尔巴尼亚语    | alb | 是    | 阿尔及利亚阿拉伯语 | arq | 否    | 阿肯语         | aka | 否    |
|                                 | 阿拉贡语      | arg | 否    | 阿姆哈拉语     | amh | 是    | 阿萨姆语        | asm | 是    |
|                                 | 艾马拉语      | aym | 否    | 阿塞拜疆语     | aze | 是    | 阿斯图里亚斯语     | ast | 是    |
|                                 | 奥塞梯语      | oss | 否    | 爱沙尼亚语     | est | 是    | 奥杰布瓦语       | oji | 否    |
|                                 | 奥里亚语      | ori | 是    | 奥罗莫语      | orm | 否    |             |     |      |
| B                               | 波兰语       | pl  | 是    | 波斯语       | per | 是    | 布列塔尼语       | bre | 是    |
|                                 | 巴什基尔语     | bak | 否    | 巴斯克语      | baq | 是    | 巴西葡萄牙语      | pot | 否    |
|                                 | 白俄罗斯语     | bel | 是    | 柏柏尔语      | ber | 是    | 邦板牙语        | pam | 否    |
|                                 | 保加利亚语     | bul | 是    | 北方萨米语     | sme | 否    | 北索托语        | ped | 否    |
|                                 | 本巴语       | bem | 否    | 比林语       | bli | 否    | 比斯拉马语       | bis | 否    |
|                                 | 俾路支语      | bal | 否    | 冰岛语       | ice | 是    | 波斯尼亚语       | bos | 是    |
|                                 | 博杰普尔语     | bho | 否    |           |     |      |             |     |      |
| C                               | 楚瓦什语      | chv | 否    | 聪加语       | tso | 否    |             |     |      |
| D                               | 丹麦语       | dan | 是    | 德语        | de  | 是    | 鞑靼语         | tat | 是    |
|                                 | 掸语        | sha | 否    | 德顿语       | tet | 否    | 迪维希语        | div | 否    |
|                                 | 低地德语      | log | 是    |           |     |      |             |     |      |
| E                               | 俄语        | ru  | 是    |           |     |      |             |     |      |
| F                               | 法语        | fra | 是    | 菲律宾语      | fil | 是    | 芬兰语         | fin | 是    |
|                                 | 梵语        | san | 否    | 弗留利语      | fri | 否    | 富拉尼语        | ful | 否    |
|                                 | 法罗语       | fao | 否    |           |     |      |             |     |      |
| G                               | 盖尔语       | gla | 否    | 刚果语       | kon | 否    | 高地索布语       | ups | 否    |
|                                 | 高棉语       | hkm | 是    | 格陵兰语      | kal | 否    | 格鲁吉亚语       | geo | 是    |
|                                 | 古吉拉特语     | guj | 是    | 古希腊语      | gra | 否    | 古英语         | eno | 否    |
|                                 | 瓜拉尼语      | grn | 否    |           |     |      |             |     |      |
| H                               | 韩语        | kor | 是    | 荷兰语       | nl  | 是    | 胡帕语         | hup | 否    |
|                                 | 哈卡钦语      | hak | 否    |           |     |      | 海地语         | ht  | 否    |
|                                 | 豪萨语       | hau | 否    | 黑山语       | mot | 否    |             |     |      |
| J                               | 吉尔吉斯语     | kir | 否    | 加利西亚语     | glg | 是    | 加拿大法语       | frn | 否    |
|                                 | 加泰罗尼亚语    | cat | 是    | 捷克语       | cs  | 是    |             |     |      |
| K                               | 卡拜尔语      | kab | 是    | 卡纳达语      | kan | 是    | 卡努里语        | kau | 否    |
|                                 | 卡舒比语      | kah | 否    | 康瓦尔语      | cor | 否    | 科萨语         | xho | 是    |
|                                 | 科西嘉语      | cos | 否    | 克里克语      | cre | 否    | 克里米亚鞑靼语     | cri | 否    |
|                                 | 克林贡语      | kli | 否    | 克罗地亚语     | hrv | 是    | 克丘亚语        | que | 否    |
|                                 | 克什米尔语     | kas | 否    | 孔卡尼语      | kok | 否    | 库尔德语        | kur | 是    |
| L                               | 拉丁语       | lat | 是    | 老挝语       | lao | 否    | 罗马尼亚语       | rom | 是    |
|                                 | 拉特加莱语     | lag | 否    | 拉脱维亚语     | lav | 是    | 林堡语         | lim | 否    |
|                                 | 林加拉语      | lin | 否    | 卢干达语      | lug | 否    | 卢森堡语        | ltz | 否    |
|                                 | 卢森尼亚语     | ruy | 否    | 卢旺达语      | kin | 是    | 立陶宛语        | lit | 是    |
|                                 | 罗曼什语      | roh | 否    | 罗姆语       | ro  | 否    | 逻辑语         | loj | 否    |
| M                               | 马来语       | may | 是    | 缅甸语       | bur | 是    | 马拉地语        | mar | 否    |
|                                 | 马拉加斯语     | mg  | 是    | 马拉雅拉姆语    | mal | 是    | 马其顿语        | mac | 是    |
|                                 | 马绍尔语      | mah | 否    | 迈蒂利语      | mai | 是    | 曼克斯语        | glv | 否    |
|                                 | 毛里求斯克里奥尔语 | mau | 否    | 毛利语       | mao | 否    | 孟加拉语        | ben | 是    |
|                                 | 马耳他语      | mlt | 是    | 苗语        | hmn | 否    |             |     |      |
| N                               | 挪威语       | nor | 是    | 那不勒斯语     | nea | 否    | 南恩德贝莱语      | nbl | 否    |
|                                 | 南非荷兰语     | afr | 是    | 南索托语      | sot | 否    | 尼泊尔语        | nep | 是    |
| P                               | 葡萄牙语      | pt  | 是    | 旁遮普语      | pan | 是    | 帕皮阿门托语      | pap | 否    |
|                                 | 普什图语      | pus | 否    |           |     |      |             |     |      |
| Q                               | 齐切瓦语      | nya | 否    | 契维语       | twi | 否    | 切罗基语        | chr | 否    |
| R                               | 日语        | jp  | 是    | 瑞典语       | swe | 是    |             |     |      |
| S                               | 萨丁尼亚语     | srd | 否    | 萨摩亚语      | sm  | 否    | 塞尔维亚\-克罗地亚语 | sec | 否    |
|                                 | 塞尔维亚语     | srp | 是    | 桑海语       | sol | 否    | 僧伽罗语        | sin | 是    |
|                                 | 世界语       | epo | 是    | 书面挪威语     | nob | 是    | 斯洛伐克语       | sk  | 是    |
|                                 | 斯洛文尼亚语    | slo | 是    | 斯瓦希里语     | swa | 是    |             |     |      |
|                                 | 索马里语      | som | 是    |           |     |      | 塞尔维亚语（西里尔）  | src | 否    |
| T                               | 泰语        | th  | 是    | 土耳其语      | tr  | 是    | 塔吉克语        | tgk | 是    |
|                                 | 泰米尔语      | tam | 是    | 他加禄语      | tgl | 是    | 提格利尼亚语      | tir | 否    |
|                                 | 泰卢固语      | tel | 是    | 突尼斯阿拉伯语   | tua | 否    | 土库曼语        | tuk | 否    |
|                                 |           |     |      |           |     |      |             |     |      |
| W                               | 乌克兰语      | ukr | 是    | 瓦隆语       | wln | 是    | 威尔士语        | wel | 是    |
|                                 | 文达语       | ven | 否    | 沃洛夫语      | wol | 否    | 乌尔都语        | urd | 是    |
| X                               | 西班牙语      | spa | 是    | 希伯来语      | heb | 是    | 希腊语         | el  | 是    |
|                                 | 匈牙利语      | hu  | 是    | 西弗里斯语     | fry | 是    | 西里西亚语       | sil | 否    |
|                                 | 希利盖农语     | hil | 否    | 下索布语      | los | 否    | 夏威夷语        | haw | 否    |
|                                 | 新挪威语      | nno | 是    | 西非书面语     | nqo | 否    | 信德语         | snd | 否    |
|                                 | 修纳语       | sna | 否    | 宿务语       | ceb | 否    | 叙利亚语        | syr | 否    |
|                                 |           |     |      |           |     |      | 巽他语         | sun | 否    |
| Y                               | 英语        | en  | 是    | 印地语       | hi  | 是    | 印尼语         | id  | 是    |
|                                 | 意大利语      | it  | 是    | 越南语       | vie | 是    | 意第绪语        | yid | 否    |
|                                 | 因特语       | ina | 否    | 亚齐语       | ach | 否    | 印古什语        | ing | 否    |
|                                 | 伊博语       | ibo | 否    | 伊多语       | ido | 否    | 约鲁巴语        | yor | 否    |
|                                 | 亚美尼亚语     | arm | 是    | 伊努克提图特语   | iku | 否    |             |     |      |
|                                 | 伊朗语       | ir  | 否    |           |     |      |             |     |      |
| Z                               | 中文\(简体\)  | zh  | 是    | 中文\(繁体\)  | cht | 是    | 中文\(文言文\)   | wyw | 是    |
|                                 | 中文\(粤语\)  | yue | 是    | 扎扎其语      | zaz | 否    | 中古法语        | frm | 否    |
|                                 | 祖鲁语       | zul | 否    | 爪哇语       | jav | 否    |             |     |      |
|                                 |           |     |      |           |     |      |             |     |      |




## Test Github workflow

```shell
act release --secret-file act.local.env
```


## Tips

- 使用workflow发布时，因为docker设置了registry-url，需要删除package.json里的publishConfig
- 带有scope的包，在workflow需要带上scope参数，否则一致报401
  
``` shell
npm ERR! code E401
npm ERR! Unable to authenticate, need: Basic realm="GitHub Package Registry"
```