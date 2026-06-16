---
sidebar_position: 3
---

# 特征函数

特征函数是概率论中处理独立和的强大工具——它把卷积化为乘积，把求矩化为求导。它是证明大数定律和中心极限定理的核心技术。

## 定义

随机变量 $X$ 的**特征函数**（Characteristic Function）为：

$$\varphi_X(t) = E(e^{itX}) = \int_{-\infty}^{\infty} e^{itx}\,dF(x), \quad t \in \mathbb{R}$$

其中 $i = \sqrt{-1}$ 是虚数单位。

- 离散型：$\varphi(t) = \sum_k e^{itx_k} p_k$
- 连续型：$\varphi(t) = \int_{-\infty}^{\infty} e^{itx} f(x)\,dx$

特征函数本质上是密度函数（或分布列）的**傅里叶变换**。

## 基本性质

| 性质 | 公式 |
|---|---|
| 有界性 | $|\varphi(t)| \leq 1 = \varphi(0)$ |
| 共轭对称 | $\varphi(-t) = \overline{\varphi(t)}$ |
| 一致连续 | $\varphi$ 在 $\mathbb{R}$ 上一致连续 |
| 线性变换 | $\varphi_{aX+b}(t) = e^{itb} \cdot \varphi_X(at)$ |
| **独立和** | $\varphi_{X+Y}(t) = \varphi_X(t) \cdot \varphi_Y(t)$（$X \perp\!\!\!\perp Y$） |

**独立和的特征函数 = 特征函数的乘积**。这使卷积化为乘积，是特征函数最重要的性质。

## 特征函数与矩的关系

若 $E(|X|^k) < \infty$，则 $\varphi$ 是 $k$ 阶可导的，且：

$$\varphi^{(k)}(0) = i^k \cdot E(X^k)$$

由此可从特征函数反求各阶矩。特别地：

$$E(X) = -i \cdot \varphi'(0), \quad E(X^2) = -\varphi''(0)$$

## 反演公式（唯一性定理）

若 $\varphi_X(t) = \varphi_Y(t)$ 对所有 $t$ 成立，则 $X$ 与 $Y$ 有相同的分布函数。

**特征函数唯一决定分布函数**——这是它的根本重要性所在。

## Lévy 连续性定理

> $X_n \xrightarrow{d} X$ 当且仅当 $\varphi_{X_n}(t) \to \varphi_X(t)$ 对每个 $t$ 成立，且 $\varphi_X$ 在 $t = 0$ 处连续。

此定理将"按分布收敛"转化为"特征函数的逐点收敛"，是证明中心极限定理的核心桥梁。

## 常见分布的特征函数

| 分布 | 特征函数 |
|---|---|
| 0-1 分布 $B(1, p)$ | $1 - p + p e^{it}$ |
| 二项分布 $B(n, p)$ | $(1 - p + p e^{it})^n$ |
| 泊松分布 $P(\lambda)$ | $\exp(\lambda(e^{it} - 1))$ |
| 均匀分布 $U(a, b)$ | $\dfrac{e^{itb} - e^{ita}}{it(b-a)}$ |
| 正态分布 $N(\mu, \sigma^2)$ | $\exp(i\mu t - \frac{1}{2}\sigma^2 t^2)$ |
| 指数分布 $\operatorname{Exp}(\lambda)$ | $\dfrac{\lambda}{\lambda - it}$ |
| 伽马分布 $\Gamma(\alpha, \lambda)$ | $\left(\dfrac{\lambda}{\lambda - it}\right)^{\alpha}$ |

## 特征函数在极限定理中的角色

在证明中心极限定理时：

1. 将 $X_i$ 标准化：$Y_i = \dfrac{X_i - \mu}{\sigma}$
2. 求部分和 $S_n = \frac{1}{\sqrt{n}}\sum Y_i$ 的特征函数
3. 利用独立和的性质：$\varphi_{S_n}(t) = [\varphi_{Y_1}(t/\sqrt{n})]^n$
4. 泰勒展开：$\varphi_{Y_1}(t) = 1 - \frac{t^2}{2} + o(t^2)$
5. 取极限：$\varphi_{S_n}(t) \to e^{-t^2/2}$，即标准正态的特征函数
6. 由 Lévy 连续性定理得 $\xrightarrow{d} N(0, 1)$
