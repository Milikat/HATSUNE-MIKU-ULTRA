import _0x80e0ea from'fs';async function handler(_0x3dcbad,{usedPrefix:_0x5e399f}){const _0x121b41=_0x3dcbad['sender']['split']('@')[0x0];if(_0x80e0ea['existsSync']('./jadibts/'+_0x121b41+'/creds.json')){let _0x31e8b3=Buffer['from'](_0x80e0ea['readFileSync']('./jadibts/'+_0x121b41+'/creds.json'),'utf-8')['toString']('base64');await _0x3dcbad['reply']('El\x20token\x20te\x20permite\x20iniciar\x20sesion\x20en\x20otros\x20bots,\x20recomendamos\x20no\x20compartirlo\x20con\x20nadie.\x0a\x0a*Tu\x20token\x20es:*'),await _0x3dcbad['reply'](_0x31e8b3);}else await _0x3dcbad['reply']('*No\x20tienes\x20ningun\x20token\x20activo,\x20usa\x20'+_0x5e399f+'jadibot\x20para\x20crear\x20uno.*');}handler['command']=handler['help']=['token','gettoken','serbottoken'],handler['tags']=['jadibot'];export default handler;