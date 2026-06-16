---
sidebar_position: 4
---

# 常用连续分布

## 正态分布

正态分布是概率论和统计学中最重要的分布——中心极限定理保证了大量独立随机变量之和近似服从正态分布。

### 定义

密度函数：

$$f(x) = \frac{1}{\sqrt{2\pi}\sigma} \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right), \quad x \in \mathbb{R}$$

- 期望：$E(X) = \mu$
- 方差：$\operatorname{Var}(X) = \sigma^2$
- 记作：$X \sim N(\mu, \sigma^2)$

### 标准正态分布

$\mu = 0, \sigma = 1$，密度为 $\varphi(x) = \dfrac{1}{\sqrt{2\pi}} e^{-x^2/2}$。分布函数记为 $\Phi(x)$。

### 标准化

若 $X \sim N(\mu, \sigma^2)$，则 $Z = \dfrac{X - \mu}{\sigma} \sim N(0, 1)$。

$$P(a < X \leq b) = \Phi\!\left(\frac{b-\mu}{\sigma}\right) - \Phi\!\left(\frac{a-\mu}{\sigma}\right)$$

### $3\sigma$ 原则

$$P(|X - \mu| < \sigma) \approx 68.3\%, \quad P(|X - \mu| < 2\sigma) \approx 95.4\%, \quad P(|X - \mu| < 3\sigma) \approx 99.7\%$$

### 正态分布的性质

1. 密度关于 $x = \mu$ 对称
2. **可加性**：$X \sim N(\mu_1, \sigma_1^2)$，$Y \sim N(\mu_2, \sigma_2^2)$ 独立 $\Rightarrow$ $X+Y \sim N(\mu_1+\mu_2, \sigma_1^2+\sigma_2^2)$
3. 正态随机变量的线性组合仍为正态

## 均匀分布

$$f(x) = \frac{1}{b-a}, \quad a < x < b$$

- 期望：$E(X) = \dfrac{a+b}{2}$
- 方差：$\operatorname{Var}(X) = \dfrac{(b-a)^2}{12}$
- 记作：$X \sim U(a, b)$

## 指数分布

描述等待时间（无记忆性）：

$$f(x) = \lambda e^{-\lambda x}, \quad x > 0$$

- 分布函数：$F(x) = 1 - e^{-\lambda x}$
- 期望：$E(X) = \dfrac{1}{\lambda}$
- 方差：$\operatorname{Var}(X) = \dfrac{1}{\lambda^2}$
- 记作：$X \sim \operatorname{Exp}(\lambda)$
- **无记忆性**：$P(X > s+t \mid X > s) = P(X > t)$

指数分布是唯一的具有无记忆性的连续分布。

## 伽马分布

多个独立同分布指数变量的和：

$$f(x) = \frac{\lambda^{\alpha}}{\Gamma(\alpha)} x^{\alpha-1} e^{-\lambda x}, \quad x > 0$$

- 期望：$E(X) = \dfrac{\alpha}{\lambda}$
- 方差：$\operatorname{Var}(X) = \dfrac{\alpha}{\lambda^2}$
- 记作：$X \sim \Gamma(\alpha, \lambda)$
- $\alpha = 1$ 时退化为指数分布
- $\alpha = n/2, \lambda = 1/2$ 时退化为卡方分布 $\chi^2(n)$

## 贝塔分布

在 $[0, 1]$ 上的灵活分布，常用于建模比例：

$$f(x) = \frac{1}{B(\alpha, \beta)} x^{\alpha-1} (1-x)^{\beta-1}, \quad 0 < x < 1$$

- 期望：$E(X) = \dfrac{\alpha}{\alpha+\beta}$
- $B(\alpha, \beta) = \dfrac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$

## 常用连续分布对比

| 分布 | 记号 | 期望 | 方差 | 参数范围 |
|---|---|---|---|---|
| 均匀 | $U(a, b)$ | $\frac{a+b}{2}$ | $\frac{(b-a)^2}{12}$ | $a, b \in \mathbb{R}$ |
| 正态 | $N(\mu, \sigma^2)$ | $\mu$ | $\sigma^2$ | $\mu \in \mathbb{R}, \sigma > 0$ |
| 指数 | $\operatorname{Exp}(\lambda)$ | $1/\lambda$ | $1/\lambda^2$ | $\lambda > 0$ |
| 伽马 | $\Gamma(\alpha, \lambda)$ | $\alpha/\lambda$ | $\alpha/\lambda^2$ | $\alpha, \lambda > 0$ |
| 贝塔 | $\operatorname{Beta}(\alpha, \beta)$ | $\frac{\alpha}{\alpha+\beta}$ | — | $\alpha, \beta > 0$ |
