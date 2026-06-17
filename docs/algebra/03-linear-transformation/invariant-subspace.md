---
sidebar_position: 2
---

# 不变子空间

不变子空间是线性变换的结构理论基石——它将线性变换限制在子空间上，从而实现空间的分解和矩阵的分块对角化。

## 定义

设 $\sigma$ 是线性空间 $V$ 上的线性变换，$W \subseteq V$ 是子空间。若

$$\sigma(W) \subseteq W \quad (\forall w \in W, \sigma(w) \in W)$$

则称 $W$ 为 **$\sigma$-不变子空间**。

### 基本性质

- $\{0\}$ 和 $V$ 自身总是 $\sigma$-不变子空间（平凡不变子空间）
- 任意多个 $\sigma$-不变子空间的**交**仍是 $\sigma$-不变子空间
- 任意多个 $\sigma$-不变子空间的**和**仍是 $\sigma$-不变子空间

## 重要例子

| 不变子空间 | 说明 |
|---|---|
| $\ker \sigma$ | 核是不变子空间 |
| $\operatorname{im} \sigma$ | 像是不变子空间 |
| 特征子空间 $V_\lambda$ | $V_\lambda = \{\alpha \mid \sigma(\alpha) = \lambda \alpha\}$ |
| 根子空间 | $\{\alpha \mid (\sigma - \lambda \mathcal{I})^k \alpha = 0\}$ |
| $\mathbb{C}[\sigma](\alpha)$ | 由 $\alpha$ 生成的循环子空间 |

## 不变子空间与矩阵

若 $V = W_1 \oplus W_2 \oplus \cdots \oplus W_s$，且每个 $W_i$ 是 $\sigma$-不变子空间，则 $\sigma$ 在此分解下的矩阵为**分块对角阵**：

$$\left(\begin{array}{cccc}
A_1 & & & \\
& A_2 & & \\
& & \ddots & \\
& & & A_s
\end{array}\right)$$

其中 $A_i$ 是 $\sigma|_{W_i}$ 在 $W_i$ 的某组基下的矩阵。

## Hamilton-Cayley 定理

> **定理**：设 $\sigma$ 的特征多项式为 $f(\lambda) = \det(\lambda \mathcal{I} - \sigma)$，则
> $$f(\sigma) = 0$$
> 即特征多项式是 $\sigma$ 的一个**零化多项式**。

这是不变子空间理论的最重要推论——它为后续的空间分解（准素分解）奠定了基础。

## 准素分解定理

> **定理**：设 $\sigma$ 的特征多项式为 $f(\lambda) = \prod_{i=1}^{s} (\lambda - \lambda_i)^{n_i}$（各 $\lambda_i$ 互异）。令
> $$V_i = \ker(\sigma - \lambda_i \mathcal{I})^{n_i} = \{\alpha \mid (\sigma - \lambda_i \mathcal{I})^{n_i} \alpha = 0\}$$
> 则 $V = V_1 \oplus V_2 \oplus \cdots \oplus V_s$，且每个 $V_i$ 是 $\sigma$-不变子空间。

$V_i$ 称为 $\lambda_i$ 的**根子空间**（广义特征子空间）。

### 意义

准素分解将 $V$ 以特征值为线索分解为不变子空间的直和。在 $V_i$ 上，$\sigma$ 的矩阵相似于 $\lambda_i I + N_i$，其中 $N_i$ 是幂零矩阵。这直接通向 Jordan 标准形。
