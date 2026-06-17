---
sidebar_position: 2
---

# Smith 标准形与不变因子

λ-矩阵的 Smith 标准形是数字矩阵 Jordan 标准形理论的桥梁。通过初等变换将 λ-矩阵化为对角标准形后，对角元——不变因子——是矩阵相似的全系不变量。

## λ-矩阵的定义

以 $P[\lambda]$ 中多项式为元素的 $m \times n$ 矩阵 $A(\lambda)$ 称为 **λ-矩阵**。

- 数字矩阵是 λ-矩阵的特例（零次多项式）
- 等价地：$A(\lambda) = A_0 + A_1 \lambda + \cdots + A_k \lambda^k$

### 秩

若 $A(\lambda)$ 存在一个 $r$ 阶子式不恒为零，而所有 $r+1$ 阶子式恒为零，则称 $A(\lambda)$ 的**秩**为 $r$。

## λ-矩阵的初等变换

| 类型 | 操作 |
|---|---|
| 行（列）互换 | 交换两行（列） |
| 行（列）倍增 | 某行（列）乘以非零常数 $c \in P$ |
| 行（列）倍加 | 某行（列）加上另一行（列）的 $\varphi(\lambda)$ 倍 |

**注意**：倍增只能用**常数**（不能用非常数多项式），否则可能改变行列式因子。

若 $A(\lambda)$ 可通过有限次初等变换化为 $B(\lambda)$，则称 $A$ 与 $B$ **相抵**（等价）。

## Smith 标准形

> **定理**：任何秩为 $r$ 的 λ-矩阵 $A(\lambda)$ 可经初等变换化为唯一的标准形：
> $$
> \left(\begin{array}{cccc}
> d_1(\lambda) & & & & & \\
> & \ddots & & & & \\
> & & d_r(\lambda) & & & \\
> & & & 0 & & \\
> & & & & \ddots &
> \end{array}\right)
> $$
> 其中 $d_i(\lambda)$ 是**首一**多项式，且满足整除关系：
> $$d_1(\lambda) \mid d_2(\lambda) \mid \cdots \mid d_r(\lambda)$$

$d_i(\lambda)$ 称为 $A(\lambda)$ 的**不变因子**。

## 行列式因子

### 定义

$D_k(\lambda)$ = $A(\lambda)$ 中所有 $k$ 阶子式的**最大公因式**（首一）。

$D_k$ 称为 $A(\lambda)$ 的第 $k$ 个**行列式因子**（$k = 1, 2, \ldots, r$）。

### 性质

1. $D_{k} \mid D_{k+1}$（相邻的行列式因子有整除关系）
2. 初等变换**不改变行列式因子**（因此 $D_k$ 是相抵不变量）

### 不变因子与行列式因子的关系

$$d_k(\lambda) = \frac{D_k(\lambda)}{D_{k-1}(\lambda)} \quad (k = 1, \ldots, r)$$

其中 $D_0(\lambda) \equiv 1$。

反之：

$$D_k(\lambda) = d_1(\lambda) d_2(\lambda) \cdots d_k(\lambda)$$

## 相抵的判定

> **定理**：两个 $m \times n$ 的 λ-矩阵相抵 $\iff$ 它们有相同的秩和相同的行列式因子 $\iff$ 它们有相同的不变因子。

**两个 λ-矩阵相抵当且仅当它们有相同的不变因子。**

## 数字矩阵的特征矩阵

$A \in P^{n \times n}$ 的**特征矩阵**是 $\lambda I - A$。数字矩阵的相似理论正是通过特征矩阵的相抵理论来研究的。

> **核心结论**：$A \sim B \iff \lambda I - A$ 与 $\lambda I - B$ 相抵。

这说明：数字矩阵的相似分类等价于其特征矩阵的相抵分类。
