---
sidebar_position: 2
---

# 环同态

## 定义

设 $R, S$ 为环。映射 $\varphi: R \to S$ 若满足：

1. **保加法**：$\varphi(a + b) = \varphi(a) + \varphi(b)$
2. **保乘法**：$\varphi(ab) = \varphi(a)\varphi(b)$

对所有 $a, b \in R$ 成立，则称 $\varphi$ 为从 $R$ 到 $S$ 的一个**环同态**（Ring Homomorphism）。

若此外 $R, S$ 均为含幺环且 $\varphi(1_R) = 1_S$，则称 $\varphi$ 为**含幺环同态**。

## 核与像

### 核（Kernel）

$$\ker \varphi = \{a \in R \mid \varphi(a) = 0_S\}$$

> **核心事实**：$\ker \varphi$ 是 $R$ 的理想。这是理想概念的自然来源。

### 像（Image）

$$\operatorname{im} \varphi = \{\varphi(a) \mid a \in R\}$$

$\operatorname{im} \varphi$ 是 $S$ 的子环。

## 环同态的基本性质

1. **$\varphi(0_R) = 0_S$**
2. **$\varphi(-a) = -\varphi(a)$**
3. **$\varphi$ 是单同态 $\iff$ $\ker \varphi = \{0_R\}$**
4. 若 $R$ 为含幺环且 $\varphi$ 满射，则 $\varphi(1_R) = 1_S$
5. $\varphi$ 将可逆元映为可逆元（在含幺环同态下）

## 常见环同态例子

### 1. 自然投影

$$\pi: \mathbb{Z} \to \mathbb{Z}_n, \quad \pi(a) = \bar{a} = a \bmod n$$

核：$\ker \pi = n\mathbb{Z}$（$n$ 的倍数全体）

这是"从整数到模 $n$ 剩余类"的最重要的例子。

### 2. 赋值同态

$$\operatorname{ev}_a: F[x] \to F, \quad \operatorname{ev}_a(f) = f(a)$$

核：$\ker \operatorname{ev}_a = (x - a)$（由 $x - a$ 生成的主理想）

### 3. 包含映射

$$i: \mathbb{Z} \hookrightarrow \mathbb{Q}, \quad i(n) = \frac{n}{1}$$

核为 $\{0\}$（单同态）。

### 4. 多项式环上的导数

形式导数 $D: F[x] \to F[x]$，$D(f) = f'$。注意 $D$ 保持加法但不保持乘法（不是环同态！），这是一个反例。

## 自然同态与商环

对任意理想 $I \trianglelefteq R$，存在自然满同态：

$$\pi: R \to R/I, \quad \pi(r) = r + I$$

核：$\ker \pi = I$。这表明**每个理想都是某个同态的核**。

详见[商环](../04-quotient-ring/)章节。
