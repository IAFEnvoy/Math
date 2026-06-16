---
sidebar_position: 2
---

# 分布函数与分布类型

## 随机变量的定义

设 $\Omega$ 为样本空间。**随机变量** $X$ 是 $\Omega \to \mathbb{R}$ 的映射，满足对任意实数 $x$，$\{\omega \mid X(\omega) \leq x\}$ 是事件。

## 分布函数（CDF）

### 定义

随机变量 $X$ 的**分布函数**（Cumulative Distribution Function）为：

$$F(x) = P(X \leq x), \quad x \in \mathbb{R}$$

### 基本性质

| 性质 | 含义 |
|---|---|
| **单调不减** | $x_1 < x_2 \Rightarrow F(x_1) \leq F(x_2)$ |
| **有界性** | $0 \leq F(x) \leq 1$，$\lim_{x \to -\infty}F(x) = 0$，$\lim_{x \to +\infty}F(x) = 1$ |
| **右连续性** | $\lim_{x \to a^+}F(x) = F(a)$（左极限存在但不一定等于 $F(a)$） |

分布函数完全刻画了随机变量的概率性质。由分布函数可计算任意区间的概率：

$$P(a < X \leq b) = F(b) - F(a)$$

## 离散型随机变量

### 定义

$X$ 只取有限个或可列个值 $x_1, x_2, \ldots$，称 $X$ 为**离散型随机变量**。

### 分布列（PMF）

$$p_k = P(X = x_k), \quad k = 1, 2, \ldots$$

满足：$p_k \geq 0$，且 $\sum_k p_k = 1$。

分布函数：$F(x) = \sum_{x_k \leq x} p_k$（阶梯函数，在 $x_k$ 处有跳跃 $p_k$）。

## 连续型随机变量

### 定义

若存在非负可积函数 $f(x) \geq 0$，使对任意 $x$：

$$F(x) = \int_{-\infty}^{x} f(t)\,dt$$

则称 $X$ 为**连续型随机变量**，$f(x)$ 为其**概率密度函数**（PDF）。

### 密度的性质

1. $f(x) \geq 0$
2. $\displaystyle\int_{-\infty}^{+\infty} f(x)\,dx = 1$
3. $P(a < X \leq b) = \int_a^b f(x)\,dx$
4. 在 $f$ 的连续点，$F'(x) = f(x)$
5. **$P(X = a) = 0$**（连续型随机变量取单点值的概率恒为零）

## 分布函数求概率

| 区间 | 用分布函数 | 用密度函数 |
|---|---|---|
| $a < X \leq b$ | $F(b) - F(a)$ | $\int_a^b f(x)\,dx$ |
| $X > a$ | $1 - F(a)$ | $\int_a^{\infty} f(x)\,dx$ |
| $X = a$ | $F(a) - F(a-)$ | $0$（连续型） |
