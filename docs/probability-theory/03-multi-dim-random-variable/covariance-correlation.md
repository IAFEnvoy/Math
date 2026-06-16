---
sidebar_position: 4
---

# 协方差与相关系数

协方差衡量两个随机变量**协同变化**的方向和程度；相关系数是标准化后的协方差，取值在 $[-1, 1]$ 之间，刻画**线性相关性**。

## 协方差

### 定义

$$\operatorname{Cov}(X, Y) = E[(X - EX)(Y - EY)]$$

### 计算公式

$$\operatorname{Cov}(X, Y) = E(XY) - E(X)E(Y)$$

### 性质

| 性质 | 公式 |
|---|---|
| 对称性 | $\operatorname{Cov}(X, Y) = \operatorname{Cov}(Y, X)$ |
| 自身 | $\operatorname{Cov}(X, X) = \operatorname{Var}(X)$ |
| 线性 | $\operatorname{Cov}(aX + b, cY + d) = ac \cdot \operatorname{Cov}(X, Y)$ |
| 分配律 | $\operatorname{Cov}(X+Y, Z) = \operatorname{Cov}(X, Z) + \operatorname{Cov}(Y, Z)$ |
| 独立性 | $X \perp\!\!\!\perp Y \Rightarrow \operatorname{Cov}(X, Y) = 0$（反之不真！） |

**注意**：$\operatorname{Cov}(X, Y) = 0$ 仅意味着**不（线性）相关**，但 $X$ 与 $Y$ 可能仍有非线性依赖关系。

## 方差的和

$$\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y)$$

推广到 $n$ 个变量：

$$\operatorname{Var}\!\left(\sum_{i=1}^{n} X_i\right) = \sum_{i=1}^{n} \operatorname{Var}(X_i) + 2\sum_{i<j} \operatorname{Cov}(X_i, X_j)$$

当各变量两两不相关时，方差具有可加性。

## 相关系数

### 定义

$$\rho_{XY} = \frac{\operatorname{Cov}(X, Y)}{\sqrt{\operatorname{Var}(X) \cdot \operatorname{Var}(Y)}}$$

### 基本性质

| 性质 | 说明 |
|---|---|
| $|\rho| \leq 1$ | 由 Cauchy-Schwarz 不等式保证 |
| $\rho = 0$ | $X$ 与 $Y$ **不相关** |
| $\rho = \pm 1$ | $Y = aX + b$（几乎处处），即**完全线性相关** |
| $\rho > 0$ | 正相关（$X$ 大时 $Y$ 也倾向于大） |
| $\rho < 0$ | 负相关（$X$ 大时 $Y$ 倾向于小） |

### 独立 $\Rightarrow$ 不相关，反之不真

**反例**：$X \sim N(0, 1)$，$Y = X^2$。则 $\operatorname{Cov}(X, Y) = E(X^3) - E(X)E(X^2) = 0$，故 $\rho = 0$。但显然 $X$ 与 $Y$ 完全不独立——$Y$ 完全由 $X$ 决定。

## 协方差矩阵

对随机向量 $\mathbf{X} = (X_1, \ldots, X_n)^\top$，**协方差矩阵** $\Sigma$ 的元素为：

$$\Sigma_{ij} = \operatorname{Cov}(X_i, X_j)$$

性质：
1. $\Sigma$ 是对称矩阵
2. $\Sigma$ 是**半正定**矩阵
3. 对角线元素 $\Sigma_{ii} = \operatorname{Var}(X_i)$
4. 独立 $\Rightarrow$ $\Sigma$ 为对角阵
5. 多元正态分布完全由均值向量 $\boldsymbol{\mu}$ 和协方差矩阵 $\Sigma$ 确定

## 重要结论

- 协方差为 $0$ $\nRightarrow$ 独立（除非在多元正态中）
- 相关系数只衡量**线性**相关程度
- 若 $Y = g(X)$ 是确定性函数，协方差可能为零（如 $g$ 为偶函数、$X$ 对称分布）
