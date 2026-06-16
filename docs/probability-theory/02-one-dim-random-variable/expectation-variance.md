---
sidebar_position: 5
---

# 数学期望与方差

数学期望是随机变量的"平均值"（以概率为权重），方差衡量随机变量的波动程度。

## 数学期望

### 定义

**离散型**：$E(X) = \sum_k x_k \cdot p_k$（要求绝对收敛）

**连续型**：$E(X) = \int_{-\infty}^{\infty} x f(x)\,dx$（要求绝对可积）

### 期望的线性性质

$$E(aX + bY) = aE(X) + bE(Y)$$

无需 $X$ 与 $Y$ 独立！这是期望最重要的性质。

### 随机变量函数的期望

设 $Y = g(X)$，则：

- 离散型：$E(Y) = \sum_k g(x_k) p_k$
- 连续型：$E(Y) = \int_{-\infty}^{\infty} g(x) f(x)\,dx$

**无需先求 $Y$ 的分布**，直接用 $X$ 的分布计算。

## 方差与标准差

### 定义

$$\operatorname{Var}(X) = E[(X - E(X))^2]$$

标准差：$\sigma_X = \sqrt{\operatorname{Var}(X)}$

### 计算公式

$$\operatorname{Var}(X) = E(X^2) - [E(X)]^2$$

### 方差的性质

| 性质 | 公式 |
|---|---|
| 常数方差为零 | $\operatorname{Var}(c) = 0$ |
| 线性变换 | $\operatorname{Var}(aX + b) = a^2 \operatorname{Var}(X)$ |
| 独立和 | 若 $X \perp\!\!\!\perp Y$，则 $\operatorname{Var}(X+Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$ |
| 一般和 | $\operatorname{Var}(X+Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y)$ |

## $k$ 阶矩

| 概念 | 定义 |
|---|---|
| $k$ 阶原点矩 | $\mu_k = E(X^k)$ |
| $k$ 阶中心矩 | $\nu_k = E[(X - E(X))^k]$ |

- 一阶原点矩 = 期望
- 二阶中心矩 = 方差
- 三阶中心矩 $\to$ 偏度（衡量对称性）
- 四阶中心矩 $\to$ 峰度（衡量尾部厚度）

## 切比雪夫不等式

对任意 $\varepsilon > 0$：

$$P(|X - E(X)| \geq \varepsilon) \leq \frac{\operatorname{Var}(X)}{\varepsilon^2}$$

或等价地：

$$P(|X - E(X)| < \varepsilon) \geq 1 - \frac{\operatorname{Var}(X)}{\varepsilon^2}$$

**意义**：方差越小，$X$ 越集中在期望附近。这是大数定律证明的核心工具。

## 其他特征数

| 特征数 | 定义 | 用途 |
|---|---|---|
| 变异系数 | $CV = \sigma / \mu$ | 比较不同量纲的离散程度 |
| 分位数 | $x_{\alpha}$ 满足 $P(X \leq x_{\alpha}) \geq \alpha$ | 刻画分布的尾部分位 |
| 中位数 | $m$ 满足 $F(m) \geq 0.5$ 且 $F(m-) \leq 0.5$ | 分布的"中心"（抗异常值） |
| 偏度 | $\gamma_1 = E[(X-\mu)^3] / \sigma^3$ | $\gamma_1 > 0$ 右偏，$\gamma_1 < 0$ 左偏 |
| 峰度 | $\gamma_2 = E[(X-\mu)^4] / \sigma^4 - 3$ | $\gamma_2 > 0$ 厚尾（比正态），$\gamma_2 < 0$ 薄尾 |

## 期望与方差速查表

| 分布 | 期望 | 方差 |
|---|---|---|
| $B(1, p)$ | $p$ | $p(1-p)$ |
| $B(n, p)$ | $np$ | $np(1-p)$ |
| $P(\lambda)$ | $\lambda$ | $\lambda$ |
| $\text{Geom}(p)$ | $1/p$ | $(1-p)/p^2$ |
| $U(a, b)$ | $(a+b)/2$ | $(b-a)^2/12$ |
| $N(\mu, \sigma^2)$ | $\mu$ | $\sigma^2$ |
| $\operatorname{Exp}(\lambda)$ | $1/\lambda$ | $1/\lambda^2$ |
| $\Gamma(\alpha, \lambda)$ | $\alpha/\lambda$ | $\alpha/\lambda^2$ |
