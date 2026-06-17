---
sidebar_position: 3
---

# 初等因子与 Jordan 标准形推导

初等因子将不变因子在复数域上彻底分解，每个 $(\lambda - \lambda_0)^k$ 对应一个 Jordan 块。这是整个 Jordan 标准形理论的完整推导链。

## 初等因子的定义

将每个不变因子 $d_i(\lambda)$ 在复数域上分解为一次因式的幂：

$$d_i(\lambda) = (\lambda - \lambda_1)^{e_{i1}} (\lambda - \lambda_2)^{e_{i2}} \cdots (\lambda - \lambda_s)^{e_{is}}$$

所有指数 $e_{ij} \geq 1$ 的因子 $(\lambda - \lambda_j)^{e_{ij}}$ 称为 $A(\lambda)$ 的**初等因子**。

- 同一个 $(\lambda - \lambda_j)$ 可能出现在多个不变因子中（不同的 $i$）
- 初等因子中**允许重复**（当同一个 $(\lambda - \lambda_j)^e$ 出现在多个不变因子中时）

## 初等因子与不变因子的关系

$$\text{不变因子组} \quad \overset{\text{分解}}{\longrightarrow} \quad \text{初等因子组} \quad \overset{\text{按整除关系重组}}{\longleftarrow} \quad \text{不变因子组}$$

两者是**等价**的——知道初等因子可以还原出不变因子（按整除关系重新排列即可）。

## 初等因子与矩阵相似

> **核心结论**：两个 $n$ 阶数字矩阵 $A$ 与 $B$ 相似，当且仅当它们的特征矩阵 $\lambda I - A$ 与 $\lambda I - B$ 有**相同的初等因子组**。

初等因子是矩阵相似的**完全不变量**。

## Jordan 标准形的推导链条

```
λ-矩阵 A(λ)
    ↓ 初等变换
Smith 标准形
    ↓ 对角元
不变因子 d_1(λ), ..., d_n(λ)
    ↓ 复数域分解
初等因子组 {(λ-λ_j)^{e_j}}
    ↓ 一一对应
Jordan 块 {J_{e_j}(λ_j)}
    ↓ 合并
Jordan 标准形 J
```

### 对应规则

| 初等因子 | Jordan 块 |
|---|---|
| $(\lambda - \lambda_0)^1$ | $J_1(\lambda_0) = (\lambda_0)$ |
| $(\lambda - \lambda_0)^2$ | $J_2(\lambda_0) = \left(\begin{array}{cc} \lambda_0 & 1 \\ 0 & \lambda_0 \end{array}\right)$ |
| $(\lambda - \lambda_0)^k$ | $J_k(\lambda_0)$（$k$ 阶 Jordan 块） |

## 实例推导

求 $A = \left(\begin{array}{ccc} 3 & 1 & -1 \\ 0 & 2 & 0 \\ 1 & 1 & 1 \end{array}\right)$ 的 Jordan 标准形。

**第一步**：构造特征矩阵 $\lambda I - A$。

**第二步**：通过初等变换求 Smith 标准形的不变因子（过程略）。

得不变因子：$d_1(\lambda) = 1$，$d_2(\lambda) = \lambda - 2$，$d_3(\lambda) = (\lambda - 2)^2$。

**第三步**：求初等因子。

- 不变因子：$1, \lambda-2, (\lambda-2)^2$
- 初等因子：$(\lambda-2), (\lambda-2)^2$

**第四步**：由初等因子确定 Jordan 标准形。

- $(\lambda - 2)^1$ → 1 阶 Jordan 块 $(2)$
- $(\lambda - 2)^2$ → 2 阶 Jordan 块 $\left(\begin{array}{cc} 2 & 1 \\ 0 & 2 \end{array}\right)$

因此：

$$J = \left(\begin{array}{ccc} 2 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{array}\right)$$

## 判定可对角化

$A$ 可对角化 $\iff$ 所有初等因子都是一次的 $\iff$ 最小多项式无重根。

这与之前 Jordan 标准形和最小多项式给出的判定完全一致，体现了理论的完美统一。
