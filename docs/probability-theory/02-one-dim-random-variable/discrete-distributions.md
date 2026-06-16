---
sidebar_position: 3
---

# 常用离散分布

## 0-1 分布（伯努利分布）

单次试验，成功概率 $p$：

$$P(X = 1) = p, \quad P(X = 0) = 1 - p$$

- 期望：$E(X) = p$
- 方差：$\operatorname{Var}(X) = p(1-p)$
- 记作：$X \sim B(1, p)$

## 二项分布

$n$ 重独立伯努利试验中成功的总次数：

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \ldots, n$$

- 期望：$E(X) = np$
- 方差：$\operatorname{Var}(X) = np(1-p)$
- 记作：$X \sim B(n, p)$
- **可加性**：$X \sim B(n_1, p)$，$Y \sim B(n_2, p)$ 独立 $\Rightarrow$ $X + Y \sim B(n_1 + n_2, p)$

### 二项分布的最可能值

$k_0 = \lfloor (n+1)p \rfloor$（当 $(n+1)p$ 为整数时，$k_0$ 和 $k_0 - 1$ 均为最可能值）。

## 泊松分布

描述稀有事件在固定时间/空间内发生的次数：

$$P(X = k) = \frac{\lambda^k}{k!} e^{-\lambda}, \quad k = 0, 1, 2, \ldots$$

- 期望：$E(X) = \lambda$
- 方差：$\operatorname{Var}(X) = \lambda$
- 记作：$X \sim P(\lambda)$
- **可加性**：$X \sim P(\lambda_1)$，$Y \sim P(\lambda_2)$ 独立 $\Rightarrow$ $X + Y \sim P(\lambda_1 + \lambda_2)$

### 泊松定理（二项分布的泊松近似）

当 $n$ 很大、$p$ 很小时，$B(n, p) \approx P(np)$：

$$\binom{n}{k} p^k (1-p)^{n-k} \approx \frac{(np)^k}{k!} e^{-np}$$

一般 $n \geq 20$，$p \leq 0.05$（或 $n \geq 100$，$np \leq 10$）时近似效果较好。

## 几何分布

独立伯努利试验中首次成功所需的试验次数：

$$P(X = k) = (1-p)^{k-1} p, \quad k = 1, 2, \ldots$$

- 期望：$E(X) = \dfrac{1}{p}$
- 方差：$\operatorname{Var}(X) = \dfrac{1-p}{p^2}$
- **无记忆性**：$P(X > m+n \mid X > m) = P(X > n)$

## 超几何分布

$N$ 件产品中有 $M$ 件次品，不放回抽取 $n$ 件，次品数 $X$：

$$P(X = k) = \frac{\binom{M}{k}\binom{N-M}{n-k}}{\binom{N}{n}}, \quad \max(0, n-(N-M)) \leq k \leq \min(n, M)$$

- 期望：$E(X) = n \cdot \dfrac{M}{N}$
- 方差：$\operatorname{Var}(X) = n \cdot \dfrac{M}{N} \cdot \dfrac{N-M}{N} \cdot \dfrac{N-n}{N-1}$
- 当 $n \ll N$ 时，可用二项分布近似

## 负二项分布（帕斯卡分布）

第 $r$ 次成功所需的试验次数：

$$P(X = k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}, \quad k = r, r+1, \ldots$$

- $r = 1$ 时退化为几何分布

## 常用离散分布对比

| 分布 | 记号 | 期望 | 方差 | 应用场景 |
|---|---|---|---|---|
| 0-1 | $B(1, p)$ | $p$ | $p(1-p)$ | 单次成功/失败 |
| 二项 | $B(n, p)$ | $np$ | $np(1-p)$ | $n$ 次试验成功次数 |
| 泊松 | $P(\lambda)$ | $\lambda$ | $\lambda$ | 稀有事件计数 |
| 几何 | $\text{Geom}(p)$ | $1/p$ | $(1-p)/p^2$ | 首次成功等待时间 |
| 超几何 | $H(N, M, n)$ | $nM/N$ | — | 不放回抽样 |
