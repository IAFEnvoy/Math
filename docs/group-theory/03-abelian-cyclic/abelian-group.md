---
sidebar_position: 2
---

# 交换群（Abelian Group）

## 定义

设 $G$ 为群。若对任意 $a, b \in G$，有 $ab = ba$，则称 $G$ 为**交换群**或**阿贝尔群**（Abelian Group）。

**命名来源**：以挪威数学家 Niels Henrik Abel 命名，他最早研究了这类群的性质。

## 判定条件

以下条件等价于 $G$ 为交换群：

- $\forall a, b \in G$，有 $ab = ba$
- 换位子群 $[G, G] = \{e\}$
- 映射 $g \mapsto g^{-1}$ 是群同构
- 映射 $g \mapsto g^2$ 是群同态

## 基本性质

1. **子群均正规**：交换群的任意子群都是正规子群
2. **有限生成交换群结构定理**：有限生成交换群可分解为循环群的直和
3. **有限交换群基本定理**：任意有限交换群同构于循环群的直积

## 有限交换群基本定理

设 $G$ 为有限交换群，则：

$$G \cong \mathbb{Z}_{p_1^{e_1}} \times \mathbb{Z}_{p_2^{e_2}} \times \cdots \times \mathbb{Z}_{p_k^{e_k}}$$

其中 $p_i$ 为素数（不必互异），且此分解在排列意义下唯一。

**等价形式（不变因子）**：
$$G \cong \mathbb{Z}_{d_1} \times \mathbb{Z}_{d_2} \times \cdots \times \mathbb{Z}_{d_r}$$

其中 $d_1 \mid d_2 \mid \cdots \mid d_r$，且 $d_i$ 由 $G$ 唯一确定，称为**不变因子**。

## 常见例子

| 群 | 类型 | 说明 |
|---|---|---|
| $\mathbb{Z}$ | 无限循环 | 加法群 |
| $\mathbb{Z}_n$ | 有限循环 | 模 $n$ 加法 |
| $\mathbb{R}$ | 无限 | 加法 |
| $\mathbb{C}^*$ | 无限 | 非零复数乘法 |
| $V_4$ | 有限 | Klein 四元群，$\mathbb{Z}_2 \times \mathbb{Z}_2$ |
| $\mathbb{Q}$ | 无限 | 有理数加法 |

## 自由交换群

秩为 $r$ 的**自由交换群**同构于 $\mathbb{Z}^r = \mathbb{Z} \times \mathbb{Z} \times \cdots \times \mathbb{Z}$（$r$ 个）。

## 有限交换群的分类

按阶分类的小阶交换群：

| 阶 $n$ | 交换群（同构类） |
|---|---|
| 2 | $\mathbb{Z}_2$ |
| 3 | $\mathbb{Z}_3$ |
| 4 | $\mathbb{Z}_4$、$\mathbb{Z}_2 \times \mathbb{Z}_2$ |
| 6 | $\mathbb{Z}_6$ |
| 8 | $\mathbb{Z}_8$、$\mathbb{Z}_4 \times \mathbb{Z}_2$、$\mathbb{Z}_2 \times \mathbb{Z}_2 \times \mathbb{Z}_2$ |
| 9 | $\mathbb{Z}_9$、$\mathbb{Z}_3 \times \mathbb{Z}_3$ |

## 与正规子群的关系

从 Mermaid 图中可以看出：交换群 $\to$ 所有子群均正规。这是交换群最重要的推论之一，也是商群理论的基础。
