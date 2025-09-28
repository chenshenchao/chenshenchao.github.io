# OpenSSL 速查

```bash
# 查看本版
openssl version
```

## 哈希（Hash，也有译散列）

```bash
# 获取文件哈希
openssl dgst -sha256 /path/to/file
```

## 对称加密

## 不对称加密

```bash
# 生成 ED25519 私钥（用于数字签名与验证：ECDSA）
openssl genpkey -algorithm ED25519 -out ed25519_private.pem
# 提取公钥
openssl pkey -in ed25519_private.pem -pubout -out ed25519_public.pem
```

```bash
# 生成 X25519 私钥（用于交换对称密钥:ECDH）
openssl genpkey -algorithm X25519 -out x25519_private.pem
# 查看私钥信息
openssl asn1parse -in x25519_private.pem -inform PEM
# 提取私钥 hex
openssl pkey -in x25519_private.pem -outform DER | xxd -p | tr -d '\n' | tail -c 64
# 提取公钥
openssl pkey -in x25519_private.pem -pubout -out x25519_public.pem
# 提取公钥 hex
openssl pkey -in x25519_public.pem -pubin -outform DER | xxd -p | tr -d '\n' | tail -c 64
```

```bash
# 生成 P-256（通用：ECDSA 和 ECDH）
openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out p256_private.pem
# 提取公钥
openssl pkey -in p256_private.pem -pubout -out p256_public.pem
```