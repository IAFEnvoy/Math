---
sidebar_position: 2
---

# 标准正交基与正交变换

## 欧氏空间的定义

**欧几里得空间**是实数域 $\mathbb{R}$ 上的线性空间 $V$，其上定义了一个**内积** $(\alpha, \beta)$，满足：

1. **对称性**：$(\alpha, \beta) = (\beta, \alpha)$
2. **线性性**：$(k\alpha + l\beta, \gamma) = k(\alpha, \gamma) + l(\beta, \gamma)$
3. **正定性**：$(\alpha, \alpha) \geq 0$，等号成立当且仅当 $\alpha = 0$

### 基本概念

| 概念 | 定义 |
|---|---|
| 长度（范数） | $\|\alpha\| = \sqrt{(\alpha, \alpha)}$ |
| 夹角 | $\cos \theta = \dfrac{(\alpha, \beta)}{\|\alpha\| \|\beta\|}$ |
| 正交 | $(\alpha, \beta) = 0 \iff \alpha \perp \beta$ |
| 单位向量 | $\|\alpha\| = 1$ |

### Cauchy-Schwarz 不等式

$$|(\alpha, \beta)| \leq \|\alpha\| \cdot \|\beta\|$$

等号成立当且仅当 $\alpha, \beta$ 线性相关。

### 三角不等式

$$\|\alpha + \beta\| \leq \|\alpha\| + \|\beta\|$$

## 标准正交基

### 定义

基 $\varepsilon_1, \ldots, \varepsilon_n$ 称为**标准正交基**，若

$$(\varepsilon_i, \varepsilon_j) = \delta_{ij} = \begin{cases} 1 & i = j \\ 0 & i \neq j \end{cases}$$

在标准正交基下，向量的坐标就是内积：若 $\alpha = \sum x_i \varepsilon_i$，则 $x_i = (\alpha, \varepsilon_i)$。

### 施密特正交化

对任意一组基 $\alpha_1, \ldots, \alpha_n$，可构造标准正交基：

1. **正交化**：

$$\beta_1 = \alpha_1$$

$$\beta_k = \alpha_k - \sum_{i=1}^{k-1} \frac{(\alpha_k, \beta_i)}{(\beta_i, \beta_i)} \beta_i, \quad k = 2, \ldots, n$$

2. **单位化**：$\eta_k = \dfrac{\beta_k}{\|\beta_k\|}$

## 正交变换

### 定义

线性变换 $\sigma$ 称为**正交变换**，若对任意 $\alpha, \beta \in V$：

$$(\sigma(\alpha), \sigma(\beta)) = (\alpha, \beta)$$

即保持内积不变。

### 等价条件

- $\|\sigma(\alpha)\| = \|\alpha\|$（保长）
- $\sigma$ 将标准正交基映为标准正交基
- $\sigma$ 在标准正交基下的矩阵 $Q$ 是正交矩阵：$Q^\top Q = I$

### 正交矩阵

$Q$ 是正交矩阵 $\iff$ $Q^\top Q = I$ $\iff$ 列（行）向量是两两正交的单位向量 $\iff$ $Q^{-1} = Q^\top$。

正交矩阵的行列式为 $\pm 1$。第一类（$\det = 1$）对应旋转，第二类（$\det = -1$）对应反射。

## 对称变换与实对称矩阵

### 对称变换

若 $\sigma$ 满足 $(\sigma(\alpha), \beta) = (\alpha, \sigma(\beta))$，则称 $\sigma$ 为**对称变换**。在标准正交基下，对称变换的矩阵是**实对称矩阵**。

### 实对称矩阵的谱定理

> **定理**：实对称矩阵的特征值全是实数，且不同特征值对应的特征向量正交。

> **对角化定理**：任何实对称矩阵 $A$ 可**正交对角化**：存在正交矩阵 $Q$，使
> $$Q^\top A Q = \operatorname{diag}(\lambda_1, \ldots, \lambda_n)$$

### 化二次型为平方和（正交变换法）

这正是二次型标准形理论中正交变换法的理论基础。
