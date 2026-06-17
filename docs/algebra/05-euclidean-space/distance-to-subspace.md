---
sidebar_position: 3
---

# 向量到子空间的距离

向量到子空间的距离是内积空间中的核心几何问题，其答案是最小二乘法的理论基础。

## 问题的提法

在欧氏空间 $V$ 中，给定有限维子空间 $W$ 和一个向量 $\alpha \in V$。求 $\alpha$ 到 $W$ 的**最短距离**：

$$d = \min_{w \in W} \|\alpha - w\|$$

## 正交投影

### 定理（投影定理）

> **定理**：$\alpha$ 到 $W$ 的最短距离在且仅在 $\alpha$ 在 $W$ 上的**正交投影** $\beta$ 处达到，即 $\alpha - \beta \perp W$。

换句话说：$\exists! \beta \in W$ 使 $\alpha = \beta + \gamma$，其中 $\beta \in W$，$\gamma \perp W$。$\beta$ 是 $\alpha$ 在 $W$ 上的正交投影，$\gamma$ 是 $\alpha$ 在 $W^\perp$ 上的分量。

### 证明思路

对任意 $w \in W$，$\|\alpha - w\|^2 = \|(\alpha - \beta) + (\beta - w)\|^2 = \|\alpha - \beta\|^2 + \|\beta - w\|^2$（因为 $\alpha - \beta \perp W$，故 $\alpha - \beta \perp \beta - w$）。所以 $\|\alpha - w\|^2 \geq \|\alpha - \beta\|^2$，等号当且仅当 $w = \beta$。

## 正交投影的计算

设 $W = \operatorname{span}(\eta_1, \ldots, \eta_m)$ 有**标准正交基** $\varepsilon_1, \ldots, \varepsilon_m$，则：

$$\beta = \sum_{i=1}^{m} (\alpha, \varepsilon_i) \, \varepsilon_i$$

### 用普通基求投影

若 $W$ 的基为 $\eta_1, \ldots, \eta_m$，求 $\alpha$ 在 $W$ 上的投影 $\beta = \sum x_i \eta_i$：

由 $\alpha - \beta \perp \eta_j$（$j = 1, \ldots, m$）：

$$(\beta, \eta_j) = (\alpha, \eta_j) \quad\Longrightarrow\quad \sum_{i=1}^{m} x_i (\eta_i, \eta_j) = (\alpha, \eta_j)$$

写成矩阵形式：

$$Gx = b, \quad G_{ij} = (\eta_i, \eta_j), \quad b_j = (\alpha, \eta_j)$$

其中 $G$ 是基的 **Gram 矩阵**（对称正定），解方程组即得系数 $x$。

## 最小二乘法

### 问题的提法

不相容线性方程组 $Ax = b$（$A \in \mathbb{R}^{m \times n}$，$b \in \mathbb{R}^m$，$m > n$）。求 $x$ 使 $\|Ax - b\|^2$ 最小。

### 几何理解

$Ax$ 取遍 $A$ 的列空间 $\operatorname{Col}(A)$。问题转化为：求 $b$ 到 $\operatorname{Col}(A)$ 的**正交投影**。

### 法方程（正规方程）

由 $Ax - b \perp \operatorname{Col}(A)$，得：

$$A^\top (Ax - b) = 0 \quad\Longrightarrow\quad A^\top A x = A^\top b$$

此即**正规方程**（Normal Equation）。

### 最小二乘解的公式

若 $A^\top A$ 可逆（$A$ 列满秩时一定可逆）：

$$x = (A^\top A)^{-1} A^\top b$$

$(A^\top A)^{-1} A^\top$ 称为 $A$ 的 **Moore-Penrose 左伪逆**。

### 应用

- 数据拟合（$y = a_1 f_1(x) + \cdots + a_n f_n(x)$，最小化残差平方和）
- 线性回归
- 信号处理中的去噪

## 小结

| 概念 | 核心公式 |
|---|---|
| 正交投影 | $\beta = \sum (\alpha, \varepsilon_i) \varepsilon_i$ |
| 最短距离 | $d = \|\alpha - \beta\|$ |
| 正规方程 | $A^\top A x = A^\top b$ |
| 最小二乘解 | $x = (A^\top A)^{-1} A^\top b$ |
